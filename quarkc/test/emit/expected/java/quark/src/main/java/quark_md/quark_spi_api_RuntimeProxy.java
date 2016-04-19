package quark_md;

public class quark_spi_api_RuntimeProxy extends quark.reflect.Class implements io.datawire.quark.runtime.QObject {
    public static quark.reflect.Class singleton = new quark_spi_api_RuntimeProxy();
    public quark_spi_api_RuntimeProxy() {
        super("quark.spi_api.RuntimeProxy");
        (this).name = "quark.spi_api.RuntimeProxy";
        (this).parameters = new java.util.ArrayList(java.util.Arrays.asList(new Object[]{}));
        (this).fields = new java.util.ArrayList(java.util.Arrays.asList(new Object[]{new quark.reflect.Field("quark.Runtime", "impl")}));
        (this).methods = new java.util.ArrayList(java.util.Arrays.asList(new Object[]{new quark_spi_api_RuntimeProxy_open_Method(), new quark_spi_api_RuntimeProxy_request_Method(), new quark_spi_api_RuntimeProxy_schedule_Method(), new quark_spi_api_RuntimeProxy_codec_Method(), new quark_spi_api_RuntimeProxy_serveHTTP_Method(), new quark_spi_api_RuntimeProxy_serveWS_Method(), new quark_spi_api_RuntimeProxy_respond_Method(), new quark_spi_api_RuntimeProxy_fail_Method(), new quark_spi_api_RuntimeProxy_logger_Method()}));
    }
    public Object construct(java.util.ArrayList<Object> args) {
        return new quark.spi_api.RuntimeProxy((quark.Runtime) ((args).get(0)));
    }
    public String _getClass() {
        return (String) (null);
    }
    public Object _getField(String name) {
        return null;
    }
    public void _setField(String name, Object value) {}
}
