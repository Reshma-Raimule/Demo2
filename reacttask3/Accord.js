import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Accord() {

  const [data, setData] = useState([])

  const formik = useFormik({
    initialValues: {
      id: "",
      header: "",
      para: "",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      const createData = { ...values, id: uuid() }
      // console.log(createData, "created");
      setData((prevData) => [...prevData, createData])
      resetForm()
    },
  })

  return (
    <>
      <div className='container border border-1 mx-auto w-30 p-3'>
        <div className='row'>
          <div className='col-4 pt-3' style={{ border: "1px solid black" }}>
            <h3>Add Section</h3>
              <form onSubmit={formik.handleSubmit}>
                {/* section Header */}
                <div className='mb-3 w-90'>
                  <label className='form-label'>Section Header</label>
                  <input
                    type='text'
                    name='header'
                    value={formik.values.header}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='form-control'
                  />
                </div>
                {/* section Details */}
                <div className='mb-3 w-90'>
                  <label className='form-label'>Section Details</label>
                  <textarea
                    type='text'
                    name='para'
                    value={formik.values.para}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='form-control'

                  />
                </div>
                <div>
                  <button className='btn btn-primary btn-block mb-4' type='submit'>Add</button>
                </div>
              </form>
          </div>
          <div className='col-7 offset-1'>
            {data.map((user) => {
              return <Accordion key={user.id} >
                <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{user.header}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {user.para}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Accord