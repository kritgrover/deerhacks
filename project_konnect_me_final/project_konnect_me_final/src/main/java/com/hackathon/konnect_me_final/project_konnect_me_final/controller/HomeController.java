package com.hackathon.konnect_me_final.project_konnect_me_final.controller;

import com.hackathon.konnect_me_final.project_konnect_me_final.database.DatabaseAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {
    @Autowired
    @Lazy
    private DatabaseAccess ds;

    @GetMapping("/")
    public String index(Model model) {
        //model.addAttribute("evList", ds.getEV());
        return "index";
    }


    @GetMapping("/secure/index")
    public String secureIndex() {
        return "/secure/index";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/permission-denied")
    public String permissionDenied() {
        return "/error/permission-denied";
    }

    @GetMapping("/register")
    public String getRegister () {
        return "register";

    }
    @PostMapping("/register")
    public String postRegister(@RequestParam String username, @RequestParam String password) {
        ds.addUser(username, password);
        Long userId = ds.findUserAccount(username).getUserId();
        ds.addRole(userId, Long.valueOf(1));
        ds.addRole(userId, Long.valueOf(2));
        return "redirect:/";
    }
    @PostMapping("/login")
    public String postLogin(Authentication authentication) {
        List<String> roles = new ArrayList<>();
        for (GrantedAuthority authority : authentication.getAuthorities()) {
            roles.add(authority.getAuthority());
        }
        if (roles.contains("ROLE_USER") || roles.contains("ROLE_ADMIN")) {
            return "redirect:/secure/index";
        } else {
            return "redirect:/error/permission-denied";
        }
    }

}
