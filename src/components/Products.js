import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import products from "../products.json";

export default function Products() {
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Product List</strong>
      </h4>
      <MDBRow>
        {products.map((product) => {
          return (
            <MDBCol md="12" lg="4" className="mb-4">
              <MDBCard key={product.id}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src={process.env.PUBLIC_URL + product.imageURL}
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
                  <h5 className="card-title mb-3 text-reset">{product.title}</h5>
                  <p className="text-reset">{product.description}</p>
                  <h6 className="mb-3">{product.price} DT</h6>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
