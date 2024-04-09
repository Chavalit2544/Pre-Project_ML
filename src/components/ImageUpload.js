import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';



const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    /* ทำหน้าที่ เมื่อผู้ใช้เลือกไฟล์ภาพ และจะเก็บไฟล์ที่เลือกไว้ใน selectedFile โดยใช้ setSelectedFile. */

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedFile) return;
        const formData = new FormData();
        formData.append('image', selectedFile);
    };
    const handleCancel = () => {
        setSelectedFile(null); // Clear the selected file
    };
    /*เมื่อผู้ใช้กด submit ในการอัพโหลดภาพ โดยฟังก์ชันนี้จะตรวจสอบว่ามีไฟล์ที่ถูกเลือกหรือไม่ หากไม่มีก็จะยกเลิกการทำงาน หากมีก็จะสร้าง FormData object และเพิ่มไฟล์ที่เลือกเข้าไปใน FormData object ด้วย append method. */

    return (
        <>
        
    <Container>
        <Row>
        <Col></Col>
        <Col><br/>
        <h3>อัพโหลดรูปของท่านได้ที่นี่....</h3>
        <div className="image-upload my-3 p-3 ">
      <Form onSubmit={handleSubmit}>
        <div className="preview-frame">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="img-thumbnail"
              style={{ width: "3in", height: "3in", objectFit: "contain" }}
            />
          ) : (
            <img
              src="unknow.jpg" // Path to your sample image
              alt="Sample"
              className="img-thumbnail"
              style={{ width: "3in", height: "3in", objectFit: "contain" }}
            />
          )}
        </div>
        <FormGroup>
          <Input
            type="file"
            id="fileInput"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <Label for="fileInput" className="btn btn-primary">
            Upload Image
          </Label>
          <Button color="secondary">Turn on the camera</Button>
          {selectedFile && (
            <Button color="danger" onClick={handleCancel}>
              Cancel
            </Button>
          )}
        </FormGroup>
      </Form>
    </div>
        </Col>
        <Col></Col>
        </Row>
    </Container>


        </>


    );
};

export default ImageUpload;