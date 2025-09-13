package com.mscommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@SpringBootApplication
@CrossOrigin(origins = "*")
@RestController
public class JavaServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaServiceApplication.class, args);
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Collections.singletonMap("status", "ok");
    }

    // In-memory order storage for demo
    private List<Map<String, Object>> orders = new ArrayList<>();

    @GetMapping("/orders")
    public List<Map<String, Object>> getOrders() {
        return orders;
    }

    @PostMapping("/orders")
    public Map<String, Object> createOrder(@RequestBody Map<String, Object> order) {
        // Example: expects { "cart": [...] }
        int orderId = orders.size() + 1;
        Map<String, Object> newOrder = new HashMap<>();
        newOrder.put("id", orderId);
        newOrder.put("cart", order.get("cart"));
        newOrder.put("status", "created");
        orders.add(newOrder);
        return Map.of("message", "Order placed", "order", newOrder);
    }
}
