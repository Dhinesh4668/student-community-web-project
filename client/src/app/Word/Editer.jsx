import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditerToolBar, {modules, formats} from './EditerToolBar';
import './Editer.css'

function Editer() {
  const [value, setValue] = useState('');

  return (
    <div className='container'>
      <EditerToolBar />
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={setValue}
        modules={modules}
        formats={formats} 
    />
    </div>
  )
}

export default Editer