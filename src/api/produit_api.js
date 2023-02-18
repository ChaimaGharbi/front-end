export class ProduitAPI {
  static async getAllProduits() {
    const resp = await fetch("http://localhost:3030/produit", {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  }
}
export class CommandesAPI {
  static async getAllCommandes(id) {
    const resp = await fetch("http://localhost:3030/commercant/:id/commandes", {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  }
}