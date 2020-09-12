import React, {Component} from 'react';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';


class DishDetail extends Component{

    constructor(props){
        super(props)
    }


    renderDish(dish){
        if(dish!=null){
            return(
                     <Card>
                         <CardImg width ="100%" object src={dish.image} alt={this.props.dish.name} />
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

    renderComments(dish){
        if(dish!=null){
            return(
                <div className="container">
                    <h4>Comments</h4>
                    <div>
                        {dish.comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                    <div>{comment.comment}</div>
                     <div>--{comment.author}, {comment.date.substr(0,comment.date.indexOf('T'))}
                     </div>
                    </div>
                )
            })}
              </div>
             </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                     {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                      {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>

        );       
    }
}

export default DishDetail;