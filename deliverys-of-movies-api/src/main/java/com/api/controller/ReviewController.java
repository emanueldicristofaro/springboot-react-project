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
    public List<ReviewModel> getListReviews(@PathVariable(value = "id") int id){

        return reviewService.allById(id);
    }
    
    @PostMapping("/{id}/post")
    @ResponseBody
    public boolean sendReview(@RequestBody ReviewModel reviewModel, @PathVariable(value = "id") int id) {
    	
    	return reviewService.sendReview(reviewModel, id);
    }
    
    @DeleteMapping("/{id}/delete")
    @ResponseBody
    public boolean deleteReview(@PathVariable(value = "id") int id){
    	
    	return reviewService.deleteReview(id);
    }
}
