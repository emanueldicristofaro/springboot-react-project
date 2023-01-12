package com.api.controller;

import com.api.model.ReviewModel;
import com.api.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    @Qualifier("reviewService")
    private ReviewService reviewService;

    @GetMapping("/{id}")
    @ResponseBody
    public List<ReviewModel> getListReviews(@PathVariable(value = "id") long id){

        return reviewService.allById(id);
    }
}
