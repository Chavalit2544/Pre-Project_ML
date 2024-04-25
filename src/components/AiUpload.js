const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const faceapi = require('face-api.js');

async function recognizeFaces() {
    // โหลดข้อมูลใบหน้า
    const faceData = JSON.parse(fs.readFileSync('face.json'));

    // โหลดรูปภาพ
    const img = await loadImage('test/chavalit.jpg');

    // สร้าง Canvas
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // โหลดโมเดลและกำหนดค่า
    await faceapi.nets.ssdMobilenetv1.loadFromDisk('./models');
    await faceapi.nets.faceLandmark68Net.loadFromDisk('./models');
    await faceapi.nets.faceRecognitionNet.loadFromDisk('./models');

    // ตรวจจับใบหน้า
    const detections = await faceapi.detectAllFaces(canvas).withFaceLandmarks().withFaceDescriptors();

    // วาดสี่เหลี่ยมรอบใบหน้าและแสดงข้อความ
    detections.forEach(detection => {
        const bestMatch = faceapi.euclideanDistance(detection.descriptor, faceData.descriptors);
        const name = faceData.names[bestMatch];

        const box = detection.detection.box;
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.strokeRect(box.x, box.y, box.width, box.height);
        ctx.font = '16px Arial';
        ctx.fillStyle = 'blue';
        ctx.fillText(name, box.x, box.y);
        console.log(name); // พิมพ์ชื่อใบหน้าที่ตรวจพบ
    });

    // แสดงภาพที่มีการวาดสี่เหลี่ยมและข้อความบน Canvas
    fs.writeFileSync('output.jpg', canvas.toBuffer('image/jpeg'));
}

recognizeFaces();
