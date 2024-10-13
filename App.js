class Producto{ 

    constructor(name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;


    }
}
class UI{
    addProduct(product){
       const productList = document.getElementById('product-list');
       const element= document.createElement('div');
       element.innerHTML=`
          <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Nombre</strong>:${product.name}
                <strong>Precio</strong>: ${product.price}
                <strong>Anio</strong>: ${product.year}
                <a class="btn btn-danger" name="delete">Borrar</a>

             </div>
             </div>

        `;
       
       productList.appendChild(element);
       

    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Producto borrado', 'info');
        }
    }
    showMessage(message, cssClass){
        const div =document.createElement('div');
        div.className =  alert - {cssClass}; mt-2;
        div.appendChild(document.createTextNode(message)); 
 
         const container= document.querySelector('.container');
         const app= document.querySelector('#App');
         container.insertBefore(div,app);
         setTimeout(function () {
            document.querySelector('.alert').remove

        }, 4000);

    }
}


document.getElementById('product-form').addEventListener('submit', function(e){
    
    const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year = document.getElementById('year').value;

   

   const product = new Producto(name, price, year);
   console.log(product.name);


   const ui= new UI();
   if (name === '' || price === '' || year === '') {
    return ui.showMessage('Complete all fields', 'danger');
   }
   ui.addProduct(product);
   ui.resetForm();


  console.log(e);
  
  e.preventDefault();
});
document.getElementById('product-list').addEventListener('click', function(e){
    const ui= new UI();
    ui.deleteProduct(e.target);


});