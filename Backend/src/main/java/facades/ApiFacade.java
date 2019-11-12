package facades;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

/**
 *
 * @author emilt
 */
public class ApiFacade {

    
    //This fetch method returns a string with a json format
    //based on a given url (using HTTP connection and a request method).
    public String fetch(String urlStr) {
        try {
            URL url = new URL(urlStr);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Accept", "application/json;charset=UTF-8");
            String jsonStr = "";
            try ( Scanner scan = new Scanner(con.getInputStream())) {
                while(scan.hasNext()) {
                    jsonStr += scan.nextLine();
                }
            }
            return jsonStr;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
