package com.shop.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BackendController {
    @GetMapping(value =  {"", "/notice"})
    public String forward() {
        return "forward:/index.html";
    }
}
