package com.bigdata.wooahgong.search;

import com.bigdata.wooahgong.search.dtos.response.SearchHistoriesRes;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/search")
public class SearchController {
    private final SearchService searchService;

    // 검색창 진입 -> 최근 검색어 전달
    @GetMapping("")
    public ResponseEntity<SearchHistoriesRes> searchHistory(@RequestHeader("Authorization") String token) {
        return searchService.getRecentSearchHistory(token);
    }
    // 검색 결과 - 장소

    // 검색 결과 - 사용자

    // 최근 검색어 전체 삭제

    // 특정 최근 검색어 삭제

}
