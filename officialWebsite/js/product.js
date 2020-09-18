$(document).ready(function () {
    console.log("ready")

    $.ajax({
        url: "http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=lipstick",
        success: function (response) {
            console.log("=================")
            console.log(response)
            console.log("==================")
            for(item in response){
                // console.log(response[item])

                let name = response[item].name;
                let img = response[item].image_link;
                let link = response[item].product_link;


                var product = new Product();
                product.setProductImg = img;
                product.setProductName = name;
                product.setBtnLink = link;

                $(".product .content").append(product.creat);
            }
        }

        
    });

    // for(let i=1;i<=5;i++){
    //     var product = new Product();
        
    //     product.setProductImg = "https://picsum.photos/300/200/?random="+i;
    //     product.setProductName = i
    //     product.setBtnLink = "#"+i;

    //     $(".product .content").append(product.creat);
    // }
    
    
});

class Product{
    constructor(){
        this.Box = this.box();
        this.ImgBox = this.imgbox();
        this.ProductImg = this.productImg();
        this.BoxContent = this.boxContent();
        this.ProductName = this.productName();
        this.Btn = this.btn();
        this.BtnTitle = this.btntitle()
    }

    box(){
        let box = document.createElement('div');
        box.setAttribute('class', 'box');
        return box;
    }

    set setProductImg(img){
        this.ProductImg.setAttribute('src', img)
    }

    imgbox(){
        let box = document.createElement('div');
        box.setAttribute('class','img-box');
        return box;
    }

    productImg(){
        let img = document.createElement('img');
        img.setAttribute('class', 'productImg');
        return img
    }

    boxContent(){
        let box = document.createElement('div');
        box.setAttribute('class','box-content');
        return box
    }

    set setProductName(name){
        this.ProductName.innerHTML = name;
    }
    // 更改產品名稱
    productName(){
        let h2 = document.createElement('h2');
        h2.setAttribute('class', "productName");
        return h2;
    }

    set setBtnLink(link){
        this.Btn.setAttribute('href',link);
    }
    // 更改路徑
    btn(){
        let btn = document.createElement('a');
        btn.setAttribute('class', "productLink");
        return btn;
    }

    btntitle(){
        let p = document.createElement('p');
        p.innerHTML = "Explore service";
        return p;
    }

    get creat(){
        this.Btn.appendChild(this.BtnTitle);

        this.BoxContent.appendChild(this.ProductName)
        this.BoxContent.appendChild(this.Btn);

        this.ImgBox.appendChild(this.ProductImg);

        this.Box.appendChild(this.ImgBox);
        this.Box.appendChild(this.BoxContent);
        return this.Box;
    }
}