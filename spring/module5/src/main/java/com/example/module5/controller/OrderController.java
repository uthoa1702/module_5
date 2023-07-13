package com.example.module5.controller;

import com.example.module5.model.Orders;
import com.example.module5.service.IOrderService;
import com.example.module5.service.IProductService;
import com.example.module5.service.impl.EmailServiceImpl;
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
    @Autowired
    private EmailServiceImpl emailService;

    @GetMapping("/orders")
    public ResponseEntity<List<Orders>> getOrderList() {
        return new ResponseEntity<>(iOrderService.findAll(), HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/orders/{id}")
    public void deleteInformation(@PathVariable() Long id) {
        iOrderService.deleteById(id);


    }

    @Transactional
    @PostMapping("/create")
    public void createOrder(@RequestBody Orders orders) {
        iOrderService.save(orders.getProduct().getId(), orders.getDate(), orders.getPrice(), orders.getTotal(), orders.getQuantity());

        emailService.sendEmail("phanvuankhang@gmail.com", " new Purchase ", "new order in  " + orders.getDate());

    }
}
