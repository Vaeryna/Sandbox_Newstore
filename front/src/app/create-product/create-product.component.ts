import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  constructor(private fb: FormBuilder) {
  }

  headForm!: any;
  productForm!: any;


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.headForm = new FormGroup({
      shop: new FormControl('', Validators.required),
      locale: new FormControl('', Validators.required),
      is_master: new FormControl('', Validators.required),
    });
    this.productForm = new FormGroup({
      product_id: new FormControl('', Validators.required),
      variant_group_id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      caption: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      show_in_listing: new FormControl('', Validators.required),
      preorder_start: new FormControl('', Validators.required),
      online_from: new FormControl('', Validators.required),
      online_to: new FormControl('', Validators.required),
      images: this.fb.array([]),
      tax_class_id: new FormControl('standard', Validators.required),
      categories: this.fb.array([]),
      material: new FormControl('', Validators.required),
      country_of_origin: new FormControl('', Validators.required),
      product_hts_number: new FormControl('', Validators.required),
      shipping_weight_value: new FormControl('', Validators.required),
      shipping_weight_unit: new FormControl('', Validators.required),
      shipping_dimension_length: new FormControl('', Validators.required),
      shipping_dimension_width: new FormControl('', Validators.required),
      shipping_dimension_height: new FormControl('', Validators.required),
      shipping_dimension_unit: new FormControl('', Validators.required),
      variation_color_value: new FormControl('', Validators.required),
      variation_size_value: new FormControl('', Validators.required),
      variation_size_gender: new FormControl('', Validators.required),
      google_category: new FormControl('', Validators.required),
      variation_size_type: new FormControl('', Validators.required),
      variation_size_system: new FormControl('', Validators.required),
      external_identifiers: this.fb.array([]),
      extended_attributes: this.fb.array([]),
    });


  }

  /* FORMULAIRE POUR IMAGES MULTIPLES */
  images(): FormArray {
    return this.productForm.get("images") as FormArray
  }

  newImage(): FormGroup {
    return this.fb.group(
      {
        url: '',
        internal_dimension_height: '',
        internal_dimension_width: '',
        internal_dominant_color: "#3345CC",
        is_main: false,
      }
    )
  }

  addImage() {
    this.images().push(this.newImage())
  }

  removeImage(i: number) {
    this.images().removeAt(i)
  }


  /* FORMULAIRE POUR CATEGORIES MULTIPLES */
  categories(): FormArray {
    return this.productForm.get("categories") as FormArray
  }

  newCategory(): FormGroup {
    return this.fb.group(
      {
        path: '',
        position: '',
        is_mainCategory: false,
      }
    )
  }

  addCategory() {
    this.categories().push(this.newCategory())
  }

  removeCategory(i: number) {
    this.images().removeAt(i)
  }

  /* FORMULAIRE POUR externals ID MULTIPLES */
  externalsID(): FormArray {
    return this.productForm.get("external_identifiers") as FormArray
  }

  newExternalsID(): FormGroup {
    return this.fb.group(
      {
        type: '',
        value: ''
      }
    )
  }

  addExternalsID() {
    this.externalsID().push(this.newExternalsID())
  }

  removeExternalsID(i: number) {
    this.externalsID().removeAt(i)
  }


  /* FORMULAIRE POUR ATTRIBRUTS ETDENDUS */
  extendedAttributes(): FormArray {
    return this.productForm.get("extended_attributes") as FormArray
  }

  newExtendedAttributes(): FormGroup {
    return this.fb.group(
      {
        name: '',
        value: ''
      }
    )
  }

  addExtendedAttributes() {
    this.extendedAttributes().push(this.newExtendedAttributes())
  }

  removeExtendedAttributes(i: number) {
    this.extendedAttributes().removeAt(i)
  }


  submit() {
    const dataHead = this.headForm.value;
    const dataItem = this.productForm.value;
    // const dataOtherItem = this.otherProductForm.value;
    console.log('data', this.headForm.value);
    console.log("dataItem", dataItem)
    // console.log("dataOther Item", dataOtherItem)

    const items = [{
      product_id: dataItem.product_id,
      variant_group_id: dataItem.variant_group_id,
      title: dataItem.title,
      caption: dataItem.caption,
      description: dataItem.description,
      show_in_listing: dataItem.show_in_listing,
      preorder_start: dataItem.preorder_start,
      online_from: dataItem.online_from,
      online_to: dataItem.online_to,
      images: dataItem.images,
      tax_class_id: dataItem.tax_class_id,

      categories: dataItem.categories,
      material: dataItem.material,
      country_of_origin: dataItem.country_of_origin, //code pays
      product_hts_number: dataItem.product_hts_number, //'6204.49.1000',
      shipping_weight_value: dataItem.shipping_weight_value,//1,
      shipping_weight_unit: dataItem.shipping_weight_unit,//'lb',
      shipping_dimension_length: dataItem.shipping_dimension_length, // 5,
      shipping_dimension_width: dataItem.shipping_dimension_width, // 5,
      shipping_dimension_height: dataItem.shipping_dimension_height, // 5,
      shipping_dimension_unit: dataItem.shipping_weight_unit, // 'in',
      variation_color_value: dataItem.variation_color_value, // 'Grace Sweater Beige',
      variation_size_value: dataItem.variation_size_value, // '4',
      variation_size_gender: dataItem.variation_size_gender, // 'unisex',
      google_category: dataItem.google_category, // 'none',
      variation_size_type: dataItem.variation_size_type, // 'regular',
      variation_size_system: dataItem.variation_size_system, //'US',
      external_identifiers: dataItem.external_identifiers, /*[
            {
              type: 'sku',
              value: '3825952358',
            },
            {
              type: 'ean13',
              value: '1000101000007',
            },
          ],*/
      //
      extended_attributes: dataItem.extended_attributes, /*[
            {
              name: 'care',
              value:
                "1000101 This product doesn't need special caring instructions. Handwash at 50°F is sufficent enough.",
            },
            {
              name: 'fit',
              value: '1000101 Tight',
            },
          ],*/
    }]

    /* if (dataOtherItem) {
       items.push(dataOtherItem)
     }*/

    const product = {
      head: {
        shop: dataHead.shop,
        locale: dataHead.locale,
        is_master: dataHead.is_master,
        filterable_attributes: [
          {
            name: 'material',
            path: '$.material',
          },
          {
            name: 'fit',
            path: "$.extended_attributes[?(@.name == 'fit')].value",
          },
        ],
        searchable_attributes: [
          {
            name: 'product_id',
            path: '$.product_id',
            weight: 10,
          },
          {
            name: 'ean13',
            path: "$.external_identifiers[?(@.type == 'ean13')].value",
            weight: 5,
          },
        ],
      },
      items: items,
    };
    console.log("products : ", product)
  }

  addProduct(){
    console.log("nouveau produit")
  }
}


// import product :
/*
head {},
items[{item 1}, {item2}]
 */
