import React, { useState, useEffect } from "react";
import axios from "axios";
// import { test } from "./test";
import "./styles.css";

const TopFiveIceCreamShops = () => {
  const [request, setRequest] = useState({ fetching: false, error: false });
  const [businessData, setbusinessData] = useState([]);

  useEffect(() => {
    getBusinesses();
  }, []);

  const getBusinesses = async () => {
    setRequest({ fetching: true, error: false });
    const AUTH = `Bearer ${process.env.REACT_APP_FUSION_API_KEY}`;
    const BUSINESS_URL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Ice%20Cream%20Shop&location=Alpharetta%2C%20GA&limit=5`;

    try {
      const businesses = await axios.get(BUSINESS_URL, {
        headers: {
          Authorization: AUTH,
        },
      });

      const result = await Promise.all(
        businesses.data.businesses.map(
          async ({ id, name, image_url, location }) => {
            const { address1, city } = location;

            const REVIEW_URL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}/reviews`;
            const reviews = await axios.get(REVIEW_URL, {
              headers: {
                Authorization: AUTH,
              },
            });

            return {
              name,
              image_url,
              address1,
              city,
              review: reviews.data.reviews[0].text,
              reviewer: reviews.data.reviews[0].user.name,
            };
          }
        )
      );

      setbusinessData(result);
      setRequest({ fetching: false, error: false });
    } catch (error) {
      setRequest({ fetching: false, error: true });
    }
  };

  if (request.fetching) {
    return <p style={{ textAlign: "center" }}>Fetching Data...</p>;
  } else if (request.error) {
    return (
      <p style={{ textAlign: "center" }}>
        There was an error while retreiving the data!
      </p>
    );
  }
  return (
    <div className="container">
      <h2>Top Five Ice Cream Shops in Alpharetta</h2>
      {businessData.map(({ name, address1, city, review, reviewer }) => (
        <div className="card" key={name}>
          <div className="card-body">
            <span className="card-title">{name}</span>
            <h5 className="card-address">{`${address1}, ${city}`} </h5>
            <p>{review}</p>
            <span>{reviewer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopFiveIceCreamShops;
