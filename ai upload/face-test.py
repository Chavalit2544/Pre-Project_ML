from PIL import Image, ImageDraw
import face_recognition
import numpy as np
import pickle

know_face_name, know_face_encoding = pickle.load(open('face.p','rb'))

image = Image.open('test/chavalit.jpg')

face_location = face_recognition.face_locations(np.array(image))
face_encoding = face_recognition.face_encodings(np.array(image), face_location)
# print(face_encoding)

draw = ImageDraw.Draw(image)
for face_encoding, face_location in zip(face_encoding, face_location):
    face_distances = face_recognition.face_distance(know_face_encoding, face_encoding)
    best_match_index = np.argmin(face_distances)
    name = know_face_name[best_match_index]

    top, right, bottom, left = face_location
    draw.rectangle([left, top, right, bottom])
    draw.text((left, top),name)
    if name == know_face_name[0]:
        print("Oval Face : ใบหน้าของคุณมีลักษณะเป็นทรงไข่เป็นคนที่รักสวยรักงาม ช่างแต่งตัว และรักความสบาย สำหรับเรื่องความรักจะต้องมาคู่กับฐานะทางการเงินที่ดี เพราะความเป้นคนฉลาด ทำให้ปรับตัวเข้าหากับสิ่งต่าง ๆ ได้ง่าย ยอมรับการเปลี่ยนแปลงที่ดี มักได้รับความช่วยเหลือจากคนรอบข้างอยู่เสมอ มีความสามรถทางศิลปะ มีรสนิยมที่ดี ช่างฝันและมุ่งมั่นทำฝันให้เป้นจริง ")
    elif name == know_face_name[1]:
        print("Long Face : ใบหน้าของคุณมีลักษณะเป็นใบหน้ายาวซึ่งมีลักษะที่คล้ายกับทรงไข่ แต่จะมีความยาวมากกว่าอย่างเห็นได้ชัด")
    elif name == know_face_name[2]:
        print("Round Face : ใบหน้าของคุณมีลักษณะเป็นทรงกลมโดยพื้นฐานเเล้วเป็นคนที่มองโลกในแง่ดี ใจเย็น มีจิตใจที่ดี อาจจะดูเป็นคนเฉื่อย ๆ ไม่กระตือรือร้น แต่ก็ไม่แน่นอนเสมอไป คนที่มีใบหน้าทรงกลมไม่ค่อยมีความอดทนสักเท่าไหร่ เป็นคนนิ่ง ๆ ไม่ชอบชิงดีชิงเด่นกับใคร ซึ่งอาจทำให้ชีวิตดูน่าเบื่อ ")
    elif name == know_face_name[3]:
        print("Square Face : ใบหน้าของคุณมีลักษณะเป็นทรงสี่เหลี่ยมจัตุรัสใบหน้ารูปแบบนี้เป็นคนที่เอาแต่ใจตัวเอง มั่นใจในตัวเองสูง เป็นคนตรงไปตรงมา คิดอย่างไรก็พูดไปอย่างนั้น ไม่ชอบการนินทาพูดลับหลังใคร มีความเข้มแข็ง เเละมีความอดทนสูง มีความสามารถในการรับมือปัญหาได้หลากหลายรูปแบบ มีความกระตือรือร้น ขยันทำงาน และมีความมุมานะเป็นที่สุด") 
    elif name == know_face_name[4]:
        print("Heart Face : ใบหน้าของคุณมีลักษณะเป็นรูปหัวใจเป็นใบหน้าที่ดึงดูดใจคนรอบข้าง เป็นคนมีสเน่ห์ เจ้าชู้ สนุกกับเรื่องของความรัก ชอบความตื่นเต้น รักการผจญภัย ชอบการใช้ชีวิตนอกบ้าน เข้าสังคมเก่ง เป็นคนสนุก สดใส ไม่น่าเบื่อ แถมยังเป็นคนฉลาด คล่องแคล่วว่องไว แต่ก็มีความเข้มแข็ง มั่นใจในตัวเองสูง")
    # elif name == know_face_name[5]:
    #     print("Diamond Face : ใบหน้าของคุณมีลักษณะเป็นรูปเพชรเป็นรูปหน้าที่บ่งบอกว่าเป็นคนหยิ่งถือตัวและชอบใช้อำนาจ เป็นคนเข้มแข็งและเชื่อมั่นในตัวเองมากจนเกินไปทำให้ไม่ค่อยยิ้มแย้ม เป็นคนขี้ระแวง ระมัดระวังตัวมาก จนบางครั้งทำให้ต้องอยู่แบบโดดเดี่ยว คุณมักจะยึดตัวเองเป็นใหญ่ ไม่ยอมอ่อนข้อให้ใคร แต่คุณเป็นคนใจกล้า มีรสนิยมที่หรูหรา และฉลาดหลักแหลม")
    else:
        print("ไม่สามารถค้นหาใบหน้า")
image.show()

