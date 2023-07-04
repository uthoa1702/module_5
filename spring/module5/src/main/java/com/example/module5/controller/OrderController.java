package com.example.module5.controller;

import com.example.module5.model.Orders;
import com.example.module5.service.IOrderService;
import com.example.module5.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")

public class OrderController {
    @Autowired
    private IOrderService iOrderService;
    @Autowired
    private IProductService iProductService;

    @GetMapping("/orders")
    public ResponseEntity<List<Orders>> getOrderList() {
        return new ResponseEntity<>(iOrderService.findAll(), HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/orders/{id}")
    public void deleteInformation(@PathVariable() Long id){
        iOrderService.deleteById(id);


    }

@Transactional
    @PostMapping("/orders/create")
    public void createOrder(@RequestBody Orders orders ){
        iOrderService.save(orders.getDate(),orders.getPrice(),orders.getProduct().getId(),orders.getQuantity(),orders.getTotal());
    }
}
