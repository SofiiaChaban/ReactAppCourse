import React from 'react';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';




    function RenderDish({dish}){
        if(dish!=null){
            return(
                     <Card>
                         <CardImg width ="100%" object src={dish.image} alt={dish.name} />
                         <CardBody>
                             <CardTitle>{dish.name}</CardTitle>
                             <CardText>{dish.description}</CardText>
                         </CardBody>
                     </Card>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    function RenderComments({ comments }) {
        if (!comments || comments.length === 0) {
          return (
            <div></div>
          );
        } else {
            const c = comments.map((comment) => {
                return (
                  <div key={comment.id}>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </div>
                );
              });
          return (
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              {console.log(comments)}
              <ul className="list-unstyled">
                  {c}
              </ul>
             </div>
          );
        }
      }

    const DishDetail = (props) => {
         
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.allComments}/>
                        </div>
                </div>
            </div>

        );       
    }

export default DishDetail;