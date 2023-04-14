import React, {useState} from 'react'
import {saveAs} from 'file-saver'
import {sendResumeDataService} from '../services/sendResumeDataService'
import {getPdfService} from '../services/downloadPdfService'

const ResumePdfCreator = ()=> {

    const initialState = {profileImage: null, name: '', email: '', phone: '', profileDescription: '', talent1: '', talent1Description: '', talent2: '', talent2Description: '', talent3: '', talent3Description: '', skill1: '', skill2: '', skill3: '',skill4: '',skill5: '',skill6: '', company1: '', position1: '', startDate1: '', endDate1: '', shortDescription1: '', company2: '', position2: '', startDate2: '', endDate2: '', shortDescription2: '', collegeName: '', degree: '', gpa: ''}

    const [value, setValue]  = useState(initialState)

    const downloadPdf = async ()=> {
        const getPdf = await getPdfService()
        saveAs(getPdf, 'resume.pdf')
    }

    const sendResumeData = async()=> {
        const sendDataRes = await sendResumeDataService(value)
        if(sendDataRes.data === true){
            downloadPdf()
        }
    }

    const onDownloadClick = ()=> {
        sendResumeData()
    }

    const onProfileImageUpload = (e)=> {
        setValue({...value, profileImage: e.target.value})
    }

    const onNameChange = (e)=> {
        setValue({...value, name: e.target.value})
    }

    const onEmailChange = (e)=> {
        setValue({...value, email: e.target.value})
    }

    const onPhoneChange = (e)=> {
        setValue({...value, phone: e.target.value})
    }

    const onProfileDescriptionChange = (e)=> {
        setValue({...value, profileDescription: e.target.value})
    }

    const onTalent1Change = (e)=> {
        setValue({...value, talent1: e.target.value})
    }

    const onTalent1DescriptionChange = (e)=> {
        setValue({...value, talent1Description: e.target.value})
    }

    const onTalent2Change = (e)=> {
        setValue({...value, talent2: e.target.value})
    }

    const onTalent2DescriptionChange = (e)=> {
        setValue({...value, talent2Description: e.target.value})
    }

    const onTalent3Change = (e)=> {
        setValue({...value, talent3: e.target.value})
    }

    const onTalent3DescriptionChange = (e)=> {
        setValue({...value, talent3Description: e.target.value})
    }

    const onSkill1Change = (e)=> {
        setValue({...value, skill1: e.target.value})
    }

    const onSkill2Change = (e)=> {
        setValue({...value, skill2: e.target.value})
    }

    const onSkill3Change = (e)=> {
        setValue({...value, skill3: e.target.value})
    }

    const onSkill4Change = (e)=> {
        setValue({...value, skill4: e.target.value})
    }

    const onSkill5Change = (e)=> {
        setValue({...value, skill5: e.target.value})
    }

    const onSkill6Change = (e)=> {
        setValue({...value, skill6: e.target.value})
    }

    const onCompany1Change = (e)=> {
        setValue({...value, company1: e.target.value})
    }

    const onPosition1Change = (e)=> {
        setValue({...value, position1: e.target.value})
    }

    const onStartDate1Change = (e)=> {
        setValue({...value, startDate1: e.target.value})
    }

    const onEndDate1Change = (e)=> {
        setValue({...value, endDate1: e.target.value})
    }

    const onShortDesc1Change = (e)=> {
        setValue({...value, shortDescription1: e.target.value})
    }

    const onCompany2Change = (e)=> {
        setValue({...value, company2: e.target.value})
    }

    const onPosition2Change = (e)=> {
        setValue({...value, position2: e.target.value})
    }

    const onStartDate2Change = (e)=> {
        setValue({...value, startDate2: e.target.value})
    }

    const onEndDate2Change = (e)=> {
        setValue({...value, endDate2: e.target.value})
    }

    const onShortDesc2Change = (e)=> {
        setValue({...value, shortDescription2: e.target.value})
    }

    const onCollegeNameChange = (e)=> {
        setValue({...value, collegeName: e.target.value})
    }

    const onDegreeChange = (e)=> {
        setValue({...value, degree: e.target.value})
    }

    const onGpaChange = (e)=> {
        setValue({...value, gpa: e.target.value})
    }

    return <>
        <div className='row'>
            <div className='col-md-12'>
                <h3>Upload profile image</h3>
                <div className="">
                    <input type="file" id="file-input" name="ImageStyle" onChange={(e)=> onProfileImageUpload(e)}/>
                </div>
            </div>
        </div>
    <div className='row'>
        <div className='col-md-12'>
            <h3>Name</h3>
            <input type='text' value={value.name} onChange={(e)=> onNameChange(e)}></input>
        </div>
    </div>

    <div className='row'>
        <div className='col-md-12'>
            <h3>Email</h3>
            <input type='text' value={value.email} onChange={(e)=> onEmailChange(e)}></input>
        </div>
    </div>

    <div className='row'>
        <div className='col-md-12'>
            <h3>Phone</h3>
            <input type='text' value={value.phone} onChange={(e)=> onPhoneChange(e)}></input>
        </div>
    </div>

    <div className='row'>
        <div className='col-md-12'>
            <h3>Profile Description</h3>
            <input type='text' value={value.profileDescription} onChange={(e)=> onProfileDescriptionChange(e)}></input>
        </div>
    </div>

    <div className='row'>
    <h3>Talent</h3>
        <div className='col-md-6'>
            <input type='text' value={value.talent1} onChange={(e)=> onTalent1Change(e)}></input>
        </div>
        <div className='col-md-6'>
            <h3>Description</h3>
            <input type='text' value={value.talent1Description} onChange={(e)=> onTalent1DescriptionChange(e)}></input>
        </div>
    </div>

    <div className='row'>
    <h3>More talents</h3>
        <div className='col-md-6'>
            <input type='text' value={value.talent2} onChange={(e)=> onTalent2Change(e)}></input>
        </div>
        <div className='col-md-6'>
            <h3>Description</h3>
            <input type='text' value={value.talent2Description} onChange={(e)=> onTalent2DescriptionChange(e)}></input>
        </div>
    </div>

    <div className='row'>
    <h3>Extra Skills</h3>
        <div className='col-md-6'>
            <input type='text' value={value.talent3} onChange={(e)=> onTalent3Change(e)}></input>
        </div>
        <div className='col-md-6'>
            <h5>Description</h5>
            <input type='text' value={value.talent3Description} onChange={(e)=> onTalent3DescriptionChange(e)}></input>
        </div>
    </div>

    <div className='row'>
    <h3>Technical Skills</h3>
        <div className='col-md-2'>
            <input type='text' value={value.skill1} onChange={(e)=> onSkill1Change(e)}></input>
        </div>
        <div className='col-md-2'>
            <input type='text' value={value.skill2} onChange={(e)=> onSkill2Change(e)}></input>
        </div>
        <div className='col-md-2'>
            <input type='text' value={value.skill3} onChange={(e)=> onSkill3Change(e)}></input>
        </div>
        <div className='col-md-2'>
            <input type='text' value={value.skill4} onChange={(e)=> onSkill4Change(e)}></input>
        </div>
        <div className='col-md-2'>
            <input type='text' value={value.skill5} onChange={(e)=> onSkill5Change(e)}></input>
        </div>
        <div className='col-md-2'>
            <input type='text' value={value.skill6} onChange={(e)=> onSkill6Change(e)}></input>
        </div>
    </div>

    <div className='row'>
    <h3>Experience 1</h3>
        <div className='col-md-2'>
        <h5>company name</h5>
            <input type='text' value={value.company1} onChange={(e)=> onCompany1Change(e)}></input>
        </div>
        <div className='col-md-2'>
        <h5>position</h5>
            <input type='text' value={value.position1} onChange={(e)=> onPosition1Change(e)}></input>
        </div>
        <div className='col-md-2'>
        <h5>start year</h5>
            <input type='text' value={value.startDate1} onChange={(e)=> onStartDate1Change(e)}></input>
        </div>
        <div className='col-md-2'>
        <h5>end year</h5>
            <input type='text' value={value.endDate1} onChange={(e)=> onEndDate1Change(e)}></input>
        </div>
        <div className='col-md-2'>
        <h5>short description</h5>
            <input type='text' value={value.shortDescription1} onChange={(e)=> onShortDesc1Change(e)}></input>
        </div>
    </div>

    <div className='row'>
    <h3>Experience 2</h3>
        <div className='col-md-2'>
        <h5>company name</h5>
            <input type='text' value={value.company2} onChange={(e)=> onCompany2Change(e)}></input>
        </div>
        <div className='col-md-2'>
        <h5>position</h5>
            <input type='text' value={value.position2} onChange={(e)=> onPosition2Change(e)}></input>
        </div>
        <div className='col-md-2'>
        <h5>start year</h5>
            <input type='text' value={value.startDate2} onChange={(e)=> onStartDate2Change(e)}></input>
        </div>
        <div className='col-md-2'>
        <h5>end year</h5>
            <input type='text' value={value.endDate2} onChange={(e)=> onEndDate2Change(e)}></input>
        </div>
        <div className='col-md-2'>
        <h5>short description</h5>
            <input type='text' value={value.shortDescription2} onChange={(e)=> onShortDesc2Change(e)}></input>
        </div>
    </div>

    <div className='row'>
    <h3>Education - Degree</h3>
        <div className='col-md-4'>
        <h5>college name</h5>
            <input type='text' value={value.collegeName} onChange={(e)=> onCollegeNameChange(e)}></input>
        </div>
        <div className='col-md-4'>
        <h5>degree</h5>
            <input type='text' value={value.degree} onChange={(e)=> onDegreeChange(e)}></input>
        </div>
        <div className='col-md-4'>
        <h5>gpa</h5>
            <input type='text' value={value.gpa} onChange={(e)=> onGpaChange(e)}></input>
        </div>
    </div>
    
    <button className='btn btn-primary' onClick={()=> onDownloadClick()}>Download pdf</button>
    </>
}

export default ResumePdfCreator