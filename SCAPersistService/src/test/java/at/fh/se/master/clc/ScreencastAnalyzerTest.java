package at.fh.se.master.clc;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class ScreencastAnalyzerTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/model/health")
          .then()
             .statusCode(200)
             .body(is("OK"));
    }

}