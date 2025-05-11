import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/podcast")
public class PodcastServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        response.getWriter().println("<!DOCTYPE html>");
        response.getWriter().println("<html lang='pt-br'>");
        response.getWriter().println("<head>");
        response.getWriter().println("<meta charset='UTF-8'>");
        response.getWriter().println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        response.getWriter().println("<title>Podcast Exemplo</title>");
        response.getWriter().println("<link rel='stylesheet' href='styles.css'>");
        response.getWriter().println("</head>");
        response.getWriter().println("<body>");
        response.getWriter().println("<header>");
        response.getWriter().println("<h1>Nome do Podcast</h1>");
        response.getWriter().println("<p>Descrição breve do podcast.</p>");
        response.getWriter().println("</header>");
        response.getWriter().println("<main>");
        response.getWriter().println("<section class='episode'>");
        response.getWriter().println("<h2 id='episode-title'>Último Episódio</h2>");
        response.getWriter().println("<audio id='audio-player' controls>");
        response.getWriter().println("<source src='episodio1.mp3' type='audio/mpeg'>");
        response.getWriter().println("Seu navegador não suporta o elemento de áudio.");
        response.getWriter().println("</audio>");
        response.getWriter().println("<p id='episode-description'>Descrição do episódio.</p>");
        response.getWriter().println("<button id='next-episode'>Próximo Episódio</button>");
        response.getWriter().println("</section>");
        response.getWriter().println("</main>");
        response.getWriter().println("<footer>");
        response.getWriter().println("<p>&copy; 2024 Nome do Podcast</p>");
        response.getWriter().println("</footer>");
        response.getWriter().println("<script src='script.js'></script>");
        response.getWriter().println("</body>");
        response.getWriter().println("</html>");
    }
}
