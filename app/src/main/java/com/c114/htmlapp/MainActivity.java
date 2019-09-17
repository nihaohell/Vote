package com.c114.htmlapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Build;
import android.os.Bundle;

import android.util.Log;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import com.google.gson.Gson;


import java.util.ArrayList;

import java.util.List;

public class MainActivity extends AppCompatActivity {
   private WebView web;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initView();
    }

    @JavascriptInterface
    public void initView() {
        web=findViewById(R.id.web_content);
        web.getSettings().setJavaScriptEnabled(true);
        web.getSettings().setDomStorageEnabled(true);
        web.getSettings().setDefaultTextEncodingName("utf-8");
        web.loadUrl("file:///android_asset/PostContent.html");
        web.addJavascriptInterface(this,"c114");
         List<VoteBean> list=new ArrayList<>();
        list.add(new VoteBean("001","3G",60));
        list.add(new VoteBean("002","4G",30));
        list.add(new VoteBean("003","5G",10));
        Gson json=new Gson();
        final String jsonstr=json.toJson(list);
        Log.e("list",json.toJson(list));

        web.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
              String scriptstr="javascript:bbbpost('" + "111" + "','" + "11111" + "','" + "1111" + "','" + "111" + "','" + "1111" + "','','','" + "" + "','" + 350 + "',"+ jsonstr+")";
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                    web.evaluateJavascript(scriptstr, new ValueCallback<String>() {
                        @Override
                        public void onReceiveValue(String s) {

                        }
                    });
                }else {
                    web.loadUrl(scriptstr);
                }


            }
        });

    }
    @JavascriptInterface
    public void runAndroidMethod(int [] arr) {
        Toast.makeText(this,arr[0]+"",Toast.LENGTH_LONG).show();

    }

}
