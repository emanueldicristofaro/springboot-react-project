package com.api.service;

import com.api.converter.ConverterReview;
import com.api.entity.Review;
import com.api.model.ReviewModel;
import com.api.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("reviewService")
public class ReviewService {

    @Autowired
    @Qualifier("converterReview")
    private ConverterReview converterReview;

    @Autowired
    @Qualifier("repositoryReview")
    private ReviewRepository reviewRepository;

    public ReviewService(ConverterReview converterReview, ReviewRepository reviewRepository) {
        this.converterReview = converterReview;
        this.reviewRepository = reviewRepository;
    }

    public List<ReviewModel> allById(long id){

        List<Review> reviewList = reviewRepository.findByMovieId(id);
        List<ReviewModel> reviewModelList = converterReview.convertList(reviewList);

        return reviewModelList;
    }


}