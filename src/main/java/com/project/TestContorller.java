package com.project;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/board")
public class TestContorller {
	
	@RequestMapping("/")
	public String test() {
		return "test";
	}
	
	@ResponseBody
	@RequestMapping(value = "get-board-list.do", method = RequestMethod.GET)
	public void getBoardList() {
		
	}
}
