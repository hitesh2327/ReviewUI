import React, { useEffect, useState } from "react";
import ReviewForm from "./reviewForm";
import axios from "axios";
import "./reviewForm.css";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewGrid = () => {
  const sUrl = "http://localhost:4000";
  const getReview = async () => {
    console.log("yha aaya");
    try {
      const res = fetch(`${sUrl}/getreview`, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        setReviewData(response.data);
        console.log("response", response);
      });
    } catch (error) {
      console.log("error : ", error);
    }
  };
  const [reviewData, setReviewData] = useState([]);
  const [bIsShow, setBIsShow] = useState(false);
  useEffect(() => {
    getReview();
  }, []);

  return (
    <div>
      {bIsShow ? (
        <ReviewForm 
        bIsShow={bIsShow} setBIsShow={setBIsShow}/>
      ) : (
        <>
          <table id="reviewGrid">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Movie</td>
              <td>Awesome Movie</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="fontAwesomeIC"
                  color="red"
                />
                <i
                  onClick={() => {
                    console.log("yha aaya");
                    setBIsShow(true)
                  }}
                >
                  <FontAwesomeIcon icon={faPencil} color="green" />
                </i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Game</td>
              <td>War Game</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="fontAwesomeIC"
                  color="red"
                />
                <i
                  onClick={() => {
                    console.log("yha aaya");
                    setBIsShow(true)
                  }}
                >
                  <FontAwesomeIcon icon={faPencil} color="green" />
                </i>
              </td>
            </tr>

            {/* {reviewData && Array.isArray(reviewData) && reviewData.length > 0
          ? reviewData.map((itm, ind) => {
              <tr>
                <td>{itm.iReviewId ? itm.iReviewId : ""}</td>
                <td>{itm.sTitle ? itm.sTitle : ""}</td>
                <td>{itm.sContent ? itm.sContent : ""}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fontAwesomeIC"
                    color="red"
                  />
                  <FontAwesomeIcon
                    icon={faPencil}
                    color="green"
                    onClick={() => {
                      <ReviewForm />;
                    }}
                  />
                </td>
              </tr>;
            })
          : null} */}
          </table>
          <div class="btn-row">
            <div>
              <input
                className="input-button"
                type="button"
                value="Add Review"
                onClick={() => {
                  setBIsShow(true);
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewGrid;
