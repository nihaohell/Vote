package com.c114.htmlapp;

/**
 * 作者：created by shenzhigang on 2019-09-17
 */
public class VoteBean {
    private  String id;
    private  String item;
    private  int opt_text;

    public VoteBean(String id, String item, int opt_text) {
        this.id = id;
        this.item = item;
        this.opt_text = opt_text;
    }
}
