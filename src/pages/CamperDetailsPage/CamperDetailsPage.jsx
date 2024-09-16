import { useParams } from "react-router-dom";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import { useEffect, useState } from "react";
import { getCamperById } from "../../campers-data-api";
import CamperData from "../../components/CamperData/CamperData";
import BookForm from "../../components/BookForm/BookForm";
import css from "./CamperDetailsPage.module.css";

function CamperDetailsPage() {
  const { id } = useParams();
  const [camperData, setCamperData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    if (!id) return;

    async function fetchCamper() {
      try {
        setLoading(true);
        const data = await getCamperById(id);
        setCamperData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCamper();
  }, [id]);

  if (!camperData) {
    return;
  }

  return (
    <section className={css.container}>
      {loading && <b>Loading details of camper...</b>}
      <CamperData camper={camperData} />
      <div className={css.switch}>
        <h2
          className={css.switchItem}
          onClick={() => setActiveTab("features")}
          style={{
            borderBottom:
              activeTab === "features" ? "5px solid #e44848" : "none",
          }}
        >
          Features
        </h2>
        <h2
          className={css.switchItem}
          onClick={() => setActiveTab("reviews")}
          style={{
            borderBottom:
              activeTab === "reviews" ? "5px solid #e44848" : "none",
          }}
        >
          Reviews
        </h2>
      </div>
      <div className={css.info}>
        {activeTab === "features" ? (
          <CamperFeatures camper={camperData} />
        ) : (
          <CamperReviews camper={camperData} />
        )}
        <BookForm />
      </div>
    </section>
  );
}

export default CamperDetailsPage;
