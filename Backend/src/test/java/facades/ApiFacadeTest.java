/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import static io.restassured.RestAssured.given;
import java.util.List;
import org.glassfish.grizzly.http.util.HttpStatus;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 *
 * @author APC
 */
public class ApiFacadeTest {
    
    private static ApiFacade facade;
    
    public ApiFacadeTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
    }

    /**
     * Test of fetch method, of class ApiFacade.
     */
    @Test
    public void testFetch_String_String() {
//        String url = "https://swapi.co/api/";
//        String specific = "people/1";
//        
//        System.out.println(facade.fetch(url, specific).toString());
//      
    }

    /**
     * Test of fetch method, of class ApiFacade.
     */
    @Test
    public void testFetch_String_List() {
        
    }
    
}
