package com.example.module5.model;

import javax.persistence.*;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn
    @ManyToOne
    private Product product;

    private String date;

    private Double price;
    private Double total;
    private Integer quantity;

    @Column(name = "is_delete",columnDefinition = "BIT default 0")
    private boolean isDelete ;

    public Orders() {
    }

    public Integer getQuantity() {
        return quantity;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Orders(Long id, Product product, String date, Double price, Double total, Integer quantity, boolean isDelete) {
        this.id = id;
        this.product = product;
        this.date = date;
        this.price = price;
        this.total = total;
        this.quantity = quantity;
        this.isDelete = isDelete;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Orders(Product product, String date, Double price, Double total, Integer quantity) {
        this.product = product;
        this.date = date;
        this.price = price;
        this.total = total;
        this.quantity = quantity;
    }

    public Orders(Long id, Product product, String date, Double price, Double total) {
        this.id = id;
        this.product = product;
        this.date = date;
        this.price = price;
        this.total = total;
    }

    public Orders(Product product, String date, Double price, Double total) {
        this.product = product;
        this.date = date;
        this.price = price;
        this.total = total;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
}
