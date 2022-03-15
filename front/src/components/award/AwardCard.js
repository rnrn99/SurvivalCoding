import React, {useState} from 'react';
import {Card, Row, Col, Button} from "react-bootstrap";
import AwardAddForm from "./AwardAddForm";
import Awards from './Awards';

// 메인 컴포넌트라고 할 수 있습니다. 
// portfolioOwnerId = user.id 로, 유저별 데이터를 불러오거나 작성시 필요 
function AwardCard ({portfolioOwnerId}) {
    // award 추가할 폼을 열고 닫는 토글 기능 
    const [addAward, setAddAward] = useState(false);
    // 추가한 리스트들이 잘 뿌려지는지 가짜 데이터 (추후 삭제 예정)
    const fake = [
      {title: '행복상', description: '행복해서 받았습니다.'},
      {title: '궁금상', description: '매 사 잘 할 수 있을까 궁금합니다.'},
      {title: '개발상', description: '미래 개발자로 거듭나겠습니다.'}
  ]
   // api가 완성된다면, 가짜데이터가 아닌, 불러온 데이터로 수상이력목록을 업데이트 할 예정
   // 이 때, user.id가 바뀌면 수상리스트를 다시 불러옴 
    const [awardList, setAwardList] = useState(fake)

    // useEffect(() =>
    //     axios.get('award/create', portfolioOwnerId).then((res) => setAwardList(res.data))
    //,[portfolioOwnerId])

    return(
    <>
      <Card className="ml-3">
        <Card.Body>
          <Row>
            <Card.Title>수상이력</Card.Title>
          </Row>
          <Row>
              <Awards portfolioOwnerId={portfolioOwnerId} awardList={awardList}/>
          </Row>
          <Row className="text-center">
            <Col>
              <Button
                variant="primary"
                onClick={()=>setAddAward(true)}>
                +
              </Button><br />  <br />  
            </Col> 
          </Row>
           {addAward&&(
            <Row>
                <AwardAddForm formController={{addAward, setAddAward}} portfolioOwnerId={portfolioOwnerId} setAwardList={setAwardList}/>
            </Row>
           )}
        </Card.Body>
      </Card>
    </>

    
    )
}

export default AwardCard;