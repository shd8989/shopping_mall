package com.shop.backend.controller.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BackendRestController {
    @RequestMapping("/api/v1")
    public String Sample() {
        return "sample123";
    }
}