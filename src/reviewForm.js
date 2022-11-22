import {React, useState} from "react";
import "./reviewForm.css";

const ReviewForm = (props) => {
  const {setBIsShow ,bIsShow}=props
  const [reviewData, setReviewData] = useState({
    sReviewTitle:"",
    sReviewContent:""
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Data : ", reviewData);
  };
  const handleOnChange=(data)=>{
    if(data.target.id==='title'){
        setReviewData({...reviewData, sReviewTitle:data.target.value})
    }else if(data.target.id==='content'){
        setReviewData({...reviewData, sReviewContent:data.target.value})
    }
  }
  return (
    <div>
      <h1>Online Review System</h1>
      <form onSubmit={handleOnSubmit}>
        <div class="row">
          <div class="col-25">
            <label for="fname">Title</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Review Title.."
              onChange={handleOnChange}
            //   value={reviewData.sTitle}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Content</label>
          </div>
          <div class="col-75">
            <textarea
              id="content"
              name="content"
              placeholder="Enter Review Content.."
            //   value={reviewContent}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
        <div class="btn-row">
          <div>
            <input
              className="input-button"
              type="submit"
              value="Submit"
            />
          </div>
          <div>
            <input className="input-button" type="button" value="Cancel" onClick={()=>{
              setBIsShow(false)
            }}/>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ReviewForm;
