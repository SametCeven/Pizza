export default function SiparisFooter(){

    return(
        <div>
            <div>
                <form>
                    <h1 className="title">Sipariş Notu</h1>
                    <label>
                        <input type="textarea" placeholder="Siparişine eklemek istediğin bir not var mı?"/>
                    </label>
                </form>
            </div>
            <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <div>
                <h1>Sipariş Toplamı</h1>
                <h2>Seçimler</h2>
                <h2>Toplam</h2>
                <button>SİPARİŞ VER</button>
            </div>
        </div>
    )

}