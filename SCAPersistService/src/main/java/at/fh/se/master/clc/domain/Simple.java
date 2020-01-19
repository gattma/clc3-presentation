package at.fh.se.master.clc.domain;

import io.quarkus.mongodb.panache.PanacheMongoEntity;

import java.io.Serializable;

public class Simple  extends PanacheMongoEntity implements Serializable {

    private String msg = "HELLO";

    public Simple() {
    }

    public Simple(String msg) {
        this.msg = msg;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
