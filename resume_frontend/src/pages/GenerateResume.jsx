import React, { useState, useEffect } from 'react';
import { FaMagic, FaTrash, FaLightbulb} from 'react-icons/fa';
import { BiBook } from 'react-icons/bi'; // FIXED: BiBook is from 'react-icons/bi', not 'fa'

import { toast } from 'react-hot-toast';
import { generateResume } from '../api/ResumeService'; // Adjust the import based on your
import { useForm, useFieldArray} from "react-hook-form";
import {FaPlusCircle } from "react-icons/fa";

const GenerateResume = () => {
  const { register, handleSubmit, control} = useForm({
    defaultValues: initialData,
  })






  const [description, setDescription] = useState('');
  const [ loading, setLoading ] = useState(false); // Assuming you have a context for resume generation

  function handleChange(event){
    //changing personal information
    const personalInformation ={
      ...data.personalInformation,
      [event.target.name]: event.target.value,
    }
    setData({
      ...data,
      personalInformation: personalInformation,
    });
  }









  const [data, setData] = useState({
    personalInformation: {
      fullName: 'Anzar',
      email: 'ianjaransari2003@gmail.com',
      phoneNumber: '3431234567',
      location: 'xigaz, India',
      linkedin: 'www.linkedin.com/in/ianjaransari',     
      github: 'www.github.com/ianjaransari', 
      portfolio: 'this is protfolio',
    },
  });


    useEffect(() => {
    console.log(data);
  },[data]);
  

  const handleGenerate = async () => {
    // alert('Generate Resume Section based on description:\n\n' + description);
    // // server call to generate resume can be implemented here
    // setDescription(''); // Clear the description after generating
    try {
        setLoading(true);
      const responseData = await generateResume(description);
      console.log('Generated Resume:', responseData);
      setData(responseData); // Assuming responseData contains the resume data
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
  function showForm(){
    return <div className="w-full p-10">
        <h1 className="flex items-center justify-center mb-6 gap-2 text-3xl font-bold text-center">
          <BiBook className="text-accent" />Resume Form</h1>
          <div>
            <p className="py-4">Personal Information</p>

            
            <div className="grid grid-cols-12 gap-4 mt-2 ">
              <div className="col-span-12 lg:col-span-6">  { /*  lg:laptop... 6 columns... else 12*/ }
                <label htmlFor="fullName" className="block mb-2">Full name</label>
                <input
                onChange={handleChange} 
                type="text" 
                name="fullName"
                id = "fullName"
                placeholder="Enter your full name"
                value={data.personalInformation.fullName}
                className="input" />

              </div>
              <div className="col-span-6">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input 
                onChange={handleChange}
                type="text" 
                name="email"
                id = "email"
                placeholder="Enter here" 
                value={data.personalInformation.email}
                className="input input-bordered w-full" />

              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-2 ">
              <div className="col-span-12 lg:col-span-6">  { /*  lg:laptop... 6 columns... else 12*/ }
                <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
                <input
                onChange={handleChange} 
                type="text" 
                name="phoneNumber"
                id = "phoneNumber"
                placeholder="Enter your phoneNumber"
                value={data.personalInformation.phoneNumber}
                className="input" />

              </div>
              <div className="col-span-6">
                <label htmlFor="location" className="block mb-2">location</label>
                <input 
                onChange={handleChange}
                type="text" 
                name="location"
                id = "location"
                placeholder="Enter location" 
                value={data.personalInformation.location}
                className="input input-bordered w-full" />

              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-2 ">
              <div className="col-span-12 lg:col-span-6">  { /*  lg:laptop... 6 columns... else 12*/ }
                <label htmlFor="linkedin" className="block mb-2">linkedin</label>
                <input 
                onChange={handleChange}
                type="text" 
                name="linkedin"
                id = "linkedin"
                placeholder="Enter your full name"
                value={data.personalInformation.linkedin}
                className="input" />

              </div>
              <div className="col-span-6">
                <label htmlFor="github" className="block mb-2">GitHub</label>
                <input  
                onChange={handleChange}
                type="text"
                name="github"
                id = "github"
                placeholder="Enter here" 
                value={data.personalInformation.github}
                className="input input-bordered w-full" />

              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-2 ">
              <div className="col-span-12 lg:col-span-12">  { /*  lg:laptop... 6 columns... else 12*/ }
                <label htmlFor="portfolio" className="block mb-2">portfolio</label>
                <input 
                onChange={handleChange}
                type="text" 
                name="portfolio"
                id = "portfolio"
                placeholder="Enter your full name"
                value={data.personalInformation.portfolio}
                className="input w-full" />

              </div>
              
            </div>
            

          </div>

    </div>
  }


  function ShowInputField(){
    return <div className="bg-base-100 shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="flex items-center justify-center mb-6 gap-2 text-3xl font-bold text-center">
          <FaLightbulb className="text-accent" />Enter Your Description</h1>

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
  }


  return (
    <div className="mt-5 p-10 flex flex-col gap items-center justify-center font-sas">
      {        showForm()}
      
      {      ShowInputField()}
    </div>
    
  )
};

export default GenerateResume;
