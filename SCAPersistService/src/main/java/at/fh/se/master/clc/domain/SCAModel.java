package at.fh.se.master.clc.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkus.mongodb.panache.PanacheMongoEntity;

import java.io.Serializable;
import java.util.List;

@JsonAutoDetect
public class SCAModel extends PanacheMongoEntity implements Serializable {

    private String workflow;
    private List<String> labels;
    private List<List<List<List<Float>>>> images;


    private String userId;

    public SCAModel() {
        super();
    }

    public SCAModel(String workflowXML, List<String> labels, List<List<List<List<Float>>>> images, String userId) {
        this.workflow = workflowXML;
        this.labels = labels;
        this.images = images;
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }


    @JsonProperty
    public String getWorkflow() {
        return workflow;
    }

    public void setWorkflow(String workflowXML) {
        this.workflow = workflowXML;
    }

    @JsonProperty
    public List<String> getLabels() {
        return this.labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public List<List<List<List<Float>>>> getImages() {
        return images;
    }

    public void setImages(List<List<List<List<Float>>>> images) {
        this.images = images;
    }

    @Override
    public String toString() {
        return "PersistEntity{workflowXML=" + this.workflow
                + ", labels=" + this.labels
                //+ ", images=" + Arrays.deepToString(this.images)
                + "}";
    }


}
