import face_recognition
standard_Pic = face_recognition.load_image_file("tle1.jpg") # รูปต้นฉบับ
face_encoding = face_recognition.face_encodings(standard_Pic)[0] # เข้ารหัสหน้าตา
standard_Pic1 = face_recognition.load_image_file("Chavalit1.jpg") # รูปต้นฉบับ
face_encoding1 = face_recognition.face_encodings(standard_Pic1)[0] # เข้ารหัสหน้าตา


unknown_Pic = face_recognition.load_image_file("Chavalit2.jpg") # ไฟล์ที่ต้องการตรวจสอบ
unknown_face_encoding = face_recognition.face_encodings(unknown_Pic)[0] # เข้ารหัสหน้าตา
results = face_recognition.compare_faces([face_encoding , face_encoding1], unknown_face_encoding) # ทำการเปรียบเทียบหน้าตาที่เข้ารหัสไว้ด้วย Face Recognition
if results[0] == False:
  print("It's TLE")
elif results[0] == False:
  print("It's Chavalit")
else:
  print("Unknow")