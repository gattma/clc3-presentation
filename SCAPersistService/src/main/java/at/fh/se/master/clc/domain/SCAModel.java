package at.fh.se.master.clc.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkus.mongodb.panache.PanacheMongoEntity;

import java.io.Serializable;
import java.util.List;

@JsonAutoDetect
public class SCAModel extends PanacheMongoEntity implements Serializable {

    private String workflowXML;
    // private String[] labels;
    private List<String> labels;
    // private float[][][] images;
    private List<List<List<Float>>> images;

    public SCAModel() {
        super();
    }

    public SCAModel(String workflowXML, List<String> labels, List<List<List<Float>>> images) {
        this.workflowXML = workflowXML;
        this.labels = labels;
        this.images = images;
    }

    @JsonProperty
    public String getWorkflowXML() {
        return workflowXML;
    }

    public void setWorkflowXML(String workflowXML) {
        this.workflowXML = workflowXML;
    }

    @JsonProperty
    public List<String> getLabels() {
        return this.labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public List<List<List<Float>>> getImages() {
        return images;
    }

    public void setImages(List<List<List<Float>>> images) {
        this.images = images;
    }

    /*
        public float[][][] getImages() {
            return images;
        }

        public void setImages(float[][][] images) {
            this.images = images;
        }
    */
    @Override
    public String toString() {
        return "PersistEntity{workflowXML=" + this.workflowXML
                + ", labels=" + this.labels
                //+ ", images=" + Arrays.deepToString(this.images)
                + "}";
    }


}
