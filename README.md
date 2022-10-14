# Voca
react를 이용하여 영어단어를 추가, 삭제, 숨기기 기능을 할 수 있는 voca 단어장입니다.

# `Site`
https://illustrious-crumble-0ddb52.netlify.app/

## 주요기능
[1] mongodb, node를 이용한 데이터 저장, 정보, 추가 기능 구현</br>
[2] isvisible hook을 이용하여 hide/show 되는 기능 구현 </br>
[3] toggleDone이라는 함수 부여하여 체크 박스 클릭시 새로운 style, 새로운 class 부여</br>
[4] useRef Hook을 이용하여 새롭게 저장될 정보를 추가하고, 기존에 저장되어있는 정보 불러오는 기능 구현

### 사용한 SKILLS 
REACT , CSS , JAVA-SCRIPT

### 제작기간
5일 소요

### 제작 기여도
100% (개인프로젝트)

### 학습 내용
react의 useNavigate, useEffect 등 다양한 Hook의 기본 사용법을 익히면서 기능을 함유하게 되었으며</br>
데이터 저장을 위한 mongodb와의 연결을 통해 데이터 저장, 송출을 기반으로 새로운 내용의 추가, 삭제, 변경 등의 기능을 구현하게 되었습니다.
 
 ## 메인 페이지
![vocamain](https://user-images.githubusercontent.com/111400649/195801864-8bb84358-bfa7-41c0-89b5-0fa99d7d9217.PNG)
 
 ## 기능 구현[1]
![voca00](https://user-images.githubusercontent.com/111400649/195801836-716e504f-2bbb-470f-8b43-13a2b56c2378.PNG)
mongodb와 node를 이용하여 데이터 저장, 정보, 추가 기능을 구현하였으며 받아진 데이터를 스타일에 맞춰 배열
 
 ## 기능 구현 [2]
![voca02](https://user-images.githubusercontent.com/111400649/195801857-8a5716dc-6a5a-4d12-9734-8fe687beb8c2.PNG)
HIDDEN 버튼 클릭시 isvisible hook을 사용하여 show / hide 가 toggle되는 기능 구현

## 기능 구현 [3]
![voca01](https://user-images.githubusercontent.com/111400649/195801854-e4315c02-80e1-473b-929b-dce43be43a34.PNG)
외운 단어일 경우, 체크박스 클릭시 더이상 클릭 못하게 css를 주었으며 class를 새로 부여하여 다른 css style 부여

## 기능 구현 [4]
![voca04](https://user-images.githubusercontent.com/111400649/195801860-d48ead01-4c00-41d7-aceb-2860fd5538bf.PNG)
![voca05](https://user-images.githubusercontent.com/111400649/195801861-ae3da652-8344-4bff-a585-fd7edb02e8bc.PNG)

새로 추가할 내용을 입력하는 페이지에서 useRef Hook을 사용하여 입력된 정보를 보내고, 날짜를 받았으며 , SEND 버튼 클릭시 새로 추가된 정보가 있는 Day페이지로 이동하는 기능 구현
 
