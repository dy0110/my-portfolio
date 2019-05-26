<template>
  <div class="skill">
    <div class="box is-shadowless">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title">
            <font-awesome-icon
              :icon="['fas', 'laptop-code']"
            />&nbsp;&nbsp;スキル一覧
          </h1>
          <div class="container">
            <div
              class="columns is-multiline"
              v-match-heights="{
                el: [
                  '.column',
                  '.card',
                  '.card-header',
                  '.card-content',
                  '.card-footer'
                ]
              }"
            >
              <skill-item
                v-for="(item, index) in itemList"
                :key="index"
                :rateValue="item.skillLevel"
              >
                <p slot="skill_title">{{ item.skil }}</p>
                <div style="white-space: pre-line" slot="skill_content">
                  {{ item.content }}
                </div>
                <div slot="skill_history">使用歴:{{ item.usageHistory }}</div>
              </skill-item>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SkillItem from "../components/SkilItem";

export default {
  components: {
    SkillItem
  },
  data() {
    return {
      itemList: [
        {
          skil: "HTML5 & CSS3",
          content: `Web系の業務に携わっているので、入社時よりずっと使っています。\n簡単なフォーム程度であればすぐ組むことができます。`,
          usageHistory: "3年",
          skillLevel: 4
        },
        {
          skil: "Bootstrap",
          content: `現在の業務で継続的に使用しています。\nデザインができなくてもある程度のレイアウトを作ることができるため、今の職場では重宝されています。\nまた、プラグインのライブラリを導入し実装した経験もあります。`,
          usageHistory: "2年",
          skillLevel: 4
        },
        {
          skil: "jQuery",
          content:
            "現在の業務で継続的に使用しています。\nBootstrapと組み合わせた表示部分のコントロールやajaxを使ったサーバーへのリクエストを実装しました。",
          usageHistory: "2年",
          skillLevel: 4
        },
        {
          skil: "Cordova",
          content:
            "ハイブリッドアプリの案件で利用しました。\nBootstrap + jQueryの組み合わせで実装し、クラウドビルドのサービスを利用してアプリをビルドした経験があります。\nなお、ローカルビルドの経験は乏しく苦慮しています。",
          usageHistory: "2年",
          skillLevel: 3
        },
        {
          skil: "JavaScript(ES6)",
          content:
            "Node.js や Vue.jsを勉強しながらではありますが、ES6の記法についても学習しています。\nES6記法でElectronのアプリケーションを作りました。",
          usageHistory: "1年半",
          skillLevel: 2
        },
        {
          skil: "Node.js",
          content:
            "Cordovaを利用するために勉強をしました。\n初めにExpressを使ったテストアプリを作製しました。\nnpmやyarnを使ったパッケージ管理や、Vue Cli の利用等でよく使っています。",
          usageHistory: "1年半",
          skillLevel: 2
        },
        {
          skil: "Vue.js",
          content:
            "jQueryの開発で不満を感じることが多くなり、新しいフレームワークを学ぶ目的で勉強を始めました。\nこのサイトを作る際にも利用しています。",
          usageHistory: "6か月",
          skillLevel: 3
        },
        {
          skil: "Java",
          content:
            "入社時の研修と最初の業務で扱いました。\n最近はほとんど触れておらず自信がありません。",
          usageHistory: "6か月",
          skillLevel: 1
        },
        {
          skil: "Git",
          content:
            "職場では始めてGitを使った案件に取り組んでいます。\nSourceTreeやVScode上でのGitの操作が行えます。しかし、コマンドラインでの経験はありません。",
          usageHistory: "6か月",
          skillLevel: 3
        },
        {
          skil: "Bluma",
          content:
            "個人的に開発するときによく使っています。\n本サイトのCSSフレームワークとしても利用しています。",
          usageHistory: "3か月",
          skillLevel: 3
        },
        {
          skil: "Firebase",
          content:
            "Cordova上のアプリケーションにプッシュ通知を組み込むために利用しました。\n次にWebサイトにプッシュ通知を組み込みました。\n他のサービスも機会を見て利用したいと考えています。",
          usageHistory: "6か月",
          skillLevel: 2
        },
         {
          skil: "TypeScript",
          content:
            "学習を始めたばかりです。\nVueに導入した際の記法の情報を集め、簡単なサンプルを作製しました。",
          usageHistory: "2か月",
          skillLevel: 2
        },
        {
          skil: "React",
          content:
            "Reactで運用されてるサービスも多い印象を受けるため、学習を始めました。\ncreate-react-appを使用して基本的な部分を学習しています。\nVue.jsに取り組んでいたおかげで大きな混乱もなく進みそうだと感じています。",
          usageHistory: "1か月",
          skillLevel: 1
        },
        {
          skil: "Dart",
          content: "Flutterを動かすために学習中です。",
          usageHistory: "1か月",
          skillLevel: 1
        },
        {
          skil: "PWA",
          content:
            "Cordovaで開発した経験がある程度活かせるのではないかと考えています。\n経験としては、Webサイトにプッシュ通知を組み込む際にサービスワーカーを定義したがあります。\nまた、Vue CLiのPWAテンプレートを使って動作するものを構築し、Chorome上でテストを行いました。",
          usageHistory: "1か月",
          skillLevel: 1
        }
      ]
    };
  }
};
</script>
