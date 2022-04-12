import io.github.cdimascio.dotenv.Dotenv;

public class Database {
    public static String[] getData(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch ( ClassNotFoundException e ) {
            e.printStackTrace();
        }
        Dotenv dotenv = Dotenv.load();
        final String DB_URL = ""; TODO: DEVO ANCORA INSERIRE IL LINK AL MIO DATABASE
        final String USER = "admin";
        final String PASS = dotenv.get("DB_PASS");
        String[] data = new String[3];
        data[0] = DB_URL;
        data[1] = USER;
        data[2] = PASS;
        return data;
    }
}
