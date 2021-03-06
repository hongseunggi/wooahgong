package com.bigdata.wooahgong.place.repository;

import com.bigdata.wooahgong.place.entity.Place;
import com.bigdata.wooahgong.place.entity.PlaceWish;
import com.bigdata.wooahgong.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlaceWishRepository extends JpaRepository<PlaceWish, Long> {
    Optional<PlaceWish> findByUserAndPlace(User user, Place place);
    void deleteByUserAndPlace(User user, Place place);
    Page<PlaceWish> findByUserOrderByModifiedDateDesc(User user, Pageable pageable);
}
