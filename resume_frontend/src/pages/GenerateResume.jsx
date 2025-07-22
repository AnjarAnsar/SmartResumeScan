import React, { useState } from 'react';
import { FaMagic, FaTrash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { generateResume } from '../api/ResumeService'; // Adjust the import based on your

const GenerateResume = () => {
  const [description, setDescription] = useState('');
  const [ loading, setLoading ] = useState(false); // Assuming you have a context for resume generation

  const handleGenerate = async () => {
    // alert('Generate Resume Section based on description:\n\n' + description);
    // // server call to generate resume can be implemented here
    // setDescription(''); // Clear the description after generating
    try {
        setLoading(true);
      const responseData = await generateResume(description);
      console.log('Generated Resume:', responseData);
    //   alert('Resume generated successfully! Check console for details.');   
      toast.success('Resume generated successfully!',{
        duration: 3000,
        position: 'top-center',
      });
    } catch (error) {
      console.log(error);
        toast.error('Failed to generate resume. Please try again.', {
            duration: 3000,
            position: 'top-center',
        });
    }
    finally {
        setLoading(false);
        setDescription(''); // Clear the description after generating
    }   
    
  };

  const handleClear = () => {
    setDescription('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Enter Your Description</h1>

        <textarea 
           disabled={loading}   // Disable textarea while loading
          className="textarea textarea-bordered w-full h-48 resize-none"
          placeholder="Describe your experience, goals, or background here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="flex justify-center mt-6 gap-4">
          <button
            disabled={loading || !description.trim()} // Disable button if loading or description is empty
            className="btn btn-primary gap-2"
            onClick={handleGenerate}
          >
            {loading && <span className="loading loading-spinner"></span>}
            <FaMagic /> Generate
          </button>
          <button
            className="btn btn-outline btn-error gap-2"
            onClick={handleClear}
            disabled={!description.trim()}
          >
            <FaTrash /> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateResume;
