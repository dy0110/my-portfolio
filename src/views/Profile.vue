<template>
  <div class="profile">
    <div class="box is-shadowless">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title">
            <font-awesome-icon
              :icon="['fas', 'file-alt']"
            />&nbsp;&nbsp;プロフィール
          </h1>
          <div class="container">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-96x96">
                      <img
                        src="../assets/noImage.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Yoshida Daichi</p>
                    <p class="subtitle is-6">
                      生年月日: 1995/1/10 <br />出身: 宮城県
                    </p>
                  </div>
                </div>
                <div class="content">
                  2019年の4月で社会人3年目になるプログラマーです。
                  <br />現職には未経験で入社しましたが勉強を続け、
                  <br />現在はjQueryを使ったWebサイトのフロント側の実装を担当しています。
                  <br />また、Cordovaを利用したハイブリッドアプリの開発にも携わることができました。
                  <br />以上の経験からモバイルアプリの開発やVue.jsのようなフレームワークを使ったアプリケーションの開発に関心があります。
                  <br />
                  <br />好きなことは コードを書くこと/プラモデル/ゲーム/サッカー
                  です。 <br />特にプラモデルに関しては完成品をSNSに投稿したり、
                  <br />関東近辺の模型展示会に参加して楽しんでいます。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
