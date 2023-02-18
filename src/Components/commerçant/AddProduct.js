import AddPicture from "./AddPicture";

export default function AddProduct() {
  return (
    <form>
      <AddPicture></AddPicture>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="nomProduit" className="col-sm-2 col-form-label">
            Nom du Produit
          </label>
          <input type="text" className="form-control" id="nomProduit" required />
        </div>
      </div>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="PrixProduit" className="col-sm-2 col-form-label">
            Prix du Produit
          </label>
          <input
            type="number"
            step="0.001"
            className="form-control"
            id="PrixProduit"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="desc" className="col-sm-2 col-form-label">
            Description
          </label>
          <textarea className="form-control" id="desc" required />
        </div>
        <div className="col-auto mx-5">
          <button type="submit" className="btn btn-primary mb-2 ">
            Ajouter
          </button>
        </div>
      </div>
    </form>
  );
}
