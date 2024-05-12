import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

export default function CreateRecord() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUpdloadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/record/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/record/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>
        Create a Monthly Production Record
      </h1>
      {/* http://127.0.0.1:5173/create-records */}
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <TextInput
            type='string'
            placeholder='Brief title for this record'
            text='cyan-800'
            required
            id='title'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <TextInput
            type='string'
            placeholder='Agent'
            text='cyan-800'
            required
            id='agent'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, agent: e.target.value })
            }
          />
          <TextInput
            type='month'
            placeholder='Month and Year'
            text='cyan-800'
            required
            id='month'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, month: e.target.value })
            }
          />
          <TextInput
            type='number'
            placeholder='Completed'
            text='cyan-800'
            id='completed'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, completed: e.target.value })
            }
          />
          <TextInput
            type='number'
            placeholder='Average Cohort'
            text='cyan-800'
            id='cohort'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, cohort: e.target.value })
            }
          />
          <TextInput
            type='number'
            placeholder='Overlaps Completed'
            text='cyan-800'
            id='overlaps'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, overlaps: e.target.value })
            }
          />
          <TextInput
            type='number'
            placeholder='QA Passed'
            text='cyan-800'
            id='qapassed'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, qapassed: e.target.value })
            }
          />
          <TextInput
            type='number'
            placeholder='QA Failed'
            text='cyan-800'
            id='qafailed'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, qafailed: e.target.value })
            }
          />
        </div>
        <div className='flex gap-4 items-center justify-between border-4  p-3'>
          <FileInput
            type='file'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            text='cyan-800'
            size='sm'
            outline
            onClick={handleUpdloadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )}
        <ReactQuill
          theme='snow'
          placeholder='Add notes about monthly data provided...'
          className='h-72 mb-12'
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type='submit' text='cyan-800' outline>
          Create Monthly Record
        </Button>
        {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
