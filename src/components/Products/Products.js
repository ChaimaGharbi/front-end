import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import products from "../../products.json";
import "./style.css";
import pencils from '../../Images/pencils.jpg';

export default function Products(props) {
  const handleDelete = () => {
    window.confirm("Are you sure you want to delete this item?");
  };
  return (
    <MDBContainer className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        {props.name === "order" ? <strong>Orders</strong> : <strong>Product List</strong>}
      </h4>
      <MDBRow>
        {products.map((product) => {
          return (
            <MDBCol md="12" lg="4" className="mb-4">
              <MDBCard key={product.id} className="mdb-card">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src={pencils}
                    fluid
                    className="w-100"
                    style={{ height: "250px", width: "450px" }}
                  />
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">{product.title}</h5>
                  <p>{product.description}</p>
                  <h6 className="mb-3">{product.price} DT</h6>
                  <button
                    id="Delete-Button"
                    className="btn border-danger text-danger mx-2"
                    onClick={handleDelete}
                    style={{ display: props.name === "order" ? "none" : "inline-block" }}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    delete
                  </button>
                  <button
                    className="btn bg-success text-white mx-2"
                    id="OrderPage"
                    style={{
                      display: props.name === "products" ? "none" : "inline-block",
                    }}
                  >
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn bg-danger text-white mx-2"
                    id="OrderPage"
                    style={{
                      display: props.name === "products" ? "none" : "inline-block",
                    }}
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
