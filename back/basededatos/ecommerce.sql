PGDMP      +            	    |            ecommerceangular    15.5    16.3 6    <           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            =           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            >           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    64479    ecommerceangular    DATABASE     �   CREATE DATABASE ecommerceangular WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
     DROP DATABASE ecommerceangular;
                postgres    false            �            1259    64533    cart    TABLE     �   CREATE TABLE public.cart (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    "userId" integer
);
    DROP TABLE public.cart;
       public         heap    postgres    false            �            1259    64532    cart_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cart_id_seq;
       public          postgres    false    219            @           0    0    cart_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;
          public          postgres    false    218            �            1259    64526    cartitem    TABLE     �   CREATE TABLE public.cartitem (
    id integer NOT NULL,
    quantity integer NOT NULL,
    "cartId" integer,
    "productId" integer
);
    DROP TABLE public.cartitem;
       public         heap    postgres    false            �            1259    64525    cartitem_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cartitem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cartitem_id_seq;
       public          postgres    false    217            A           0    0    cartitem_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.cartitem_id_seq OWNED BY public.cartitem.id;
          public          postgres    false    216            �            1259    64548    order    TABLE       CREATE TABLE public."order" (
    id integer NOT NULL,
    total_amount numeric(10,2) NOT NULL,
    status character varying DEFAULT 'PENDING'::character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    "userId" integer
);
    DROP TABLE public."order";
       public         heap    postgres    false            �            1259    64547    order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.order_id_seq;
       public          postgres    false    223            B           0    0    order_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;
          public          postgres    false    222            �            1259    64541 	   orderitem    TABLE     �   CREATE TABLE public.orderitem (
    id integer NOT NULL,
    quantity integer NOT NULL,
    price_at_order numeric(10,2) NOT NULL,
    "orderId" integer,
    "productId" integer
);
    DROP TABLE public.orderitem;
       public         heap    postgres    false            �            1259    64540    orderitem_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orderitem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.orderitem_id_seq;
       public          postgres    false    221            C           0    0    orderitem_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.orderitem_id_seq OWNED BY public.orderitem.id;
          public          postgres    false    220            �            1259    64515    product    TABLE     %  CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    stock integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    image character varying NOT NULL
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    64514    product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          postgres    false    215            D           0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public          postgres    false    214            �            1259    64559    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    64558    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    225            E           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    224            �           2604    64536    cart id    DEFAULT     b   ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);
 6   ALTER TABLE public.cart ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    64529    cartitem id    DEFAULT     j   ALTER TABLE ONLY public.cartitem ALTER COLUMN id SET DEFAULT nextval('public.cartitem_id_seq'::regclass);
 :   ALTER TABLE public.cartitem ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    64551    order id    DEFAULT     f   ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
 9   ALTER TABLE public."order" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    64544    orderitem id    DEFAULT     l   ALTER TABLE ONLY public.orderitem ALTER COLUMN id SET DEFAULT nextval('public.orderitem_id_seq'::regclass);
 ;   ALTER TABLE public.orderitem ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            ~           2604    64518 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    64562    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            3          0    64533    cart 
   TABLE DATA           8   COPY public.cart (id, created_at, "userId") FROM stdin;
    public          postgres    false    219   �>       1          0    64526    cartitem 
   TABLE DATA           G   COPY public.cartitem (id, quantity, "cartId", "productId") FROM stdin;
    public          postgres    false    217   ?       7          0    64548    order 
   TABLE DATA           Q   COPY public."order" (id, total_amount, status, created_at, "userId") FROM stdin;
    public          postgres    false    223   L?       5          0    64541 	   orderitem 
   TABLE DATA           Y   COPY public.orderitem (id, quantity, price_at_order, "orderId", "productId") FROM stdin;
    public          postgres    false    221   @       /          0    64515    product 
   TABLE DATA           Y   COPY public.product (id, name, description, price, stock, created_at, image) FROM stdin;
    public          postgres    false    215   w@       9          0    64559    user 
   TABLE DATA           K   COPY public."user" (id, username, email, password, created_at) FROM stdin;
    public          postgres    false    225   .E       F           0    0    cart_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.cart_id_seq', 1, false);
          public          postgres    false    218            G           0    0    cartitem_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.cartitem_id_seq', 5, true);
          public          postgres    false    216            H           0    0    order_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.order_id_seq', 13, true);
          public          postgres    false    222            I           0    0    orderitem_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.orderitem_id_seq', 39, true);
          public          postgres    false    220            J           0    0    product_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.product_id_seq', 8, true);
          public          postgres    false    214            K           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
          public          postgres    false    224            �           2606    64557 $   order PK_1031171c13130102495201e3e20 
   CONSTRAINT     f   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."order" DROP CONSTRAINT "PK_1031171c13130102495201e3e20";
       public            postgres    false    223            �           2606    64531 '   cartitem PK_b258f969a3be8a9a76c99153925 
   CONSTRAINT     g   ALTER TABLE ONLY public.cartitem
    ADD CONSTRAINT "PK_b258f969a3be8a9a76c99153925" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.cartitem DROP CONSTRAINT "PK_b258f969a3be8a9a76c99153925";
       public            postgres    false    217            �           2606    64546 (   orderitem PK_b7f87d0e20dee3122eb2810d7ae 
   CONSTRAINT     h   ALTER TABLE ONLY public.orderitem
    ADD CONSTRAINT "PK_b7f87d0e20dee3122eb2810d7ae" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.orderitem DROP CONSTRAINT "PK_b7f87d0e20dee3122eb2810d7ae";
       public            postgres    false    221            �           2606    64524 &   product PK_bebc9158e480b949565b4dc7a82 
   CONSTRAINT     f   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.product DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82";
       public            postgres    false    215            �           2606    64539 #   cart PK_c524ec48751b9b5bcfbf6e59be7 
   CONSTRAINT     c   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.cart DROP CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7";
       public            postgres    false    219            �           2606    64567 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    225            �           2606    64569 #   user UQ_78a916df40e02a9deb1c4b75edb 
   CONSTRAINT     f   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb";
       public            postgres    false    225            �           2606    64571 #   user UQ_e12875dfb3b1d92d7d7c5377e22 
   CONSTRAINT     c   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22";
       public            postgres    false    225            �           2606    64592 (   orderitem FK_0c9d9af9dc338c87895e8cd0f66    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderitem
    ADD CONSTRAINT "FK_0c9d9af9dc338c87895e8cd0f66" FOREIGN KEY ("productId") REFERENCES public.product(id) ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public.orderitem DROP CONSTRAINT "FK_0c9d9af9dc338c87895e8cd0f66";
       public          postgres    false    215    3211    221            �           2606    64582 #   cart FK_756f53ab9466eb52a52619ee019    FK CONSTRAINT     �   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.cart DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019";
       public          postgres    false    3221    219    225            �           2606    64587 (   orderitem FK_a15ebbc0e6cb61cf91be01a0028    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderitem
    ADD CONSTRAINT "FK_a15ebbc0e6cb61cf91be01a0028" FOREIGN KEY ("orderId") REFERENCES public."order"(id) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.orderitem DROP CONSTRAINT "FK_a15ebbc0e6cb61cf91be01a0028";
       public          postgres    false    223    221    3219            �           2606    64597 $   order FK_caabe91507b3379c7ba73637b84    FK CONSTRAINT     �   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84";
       public          postgres    false    225    223    3221            �           2606    64577 '   cartitem FK_d1dc0ab62f9d26ffd7a546596af    FK CONSTRAINT     �   ALTER TABLE ONLY public.cartitem
    ADD CONSTRAINT "FK_d1dc0ab62f9d26ffd7a546596af" FOREIGN KEY ("productId") REFERENCES public.product(id) ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public.cartitem DROP CONSTRAINT "FK_d1dc0ab62f9d26ffd7a546596af";
       public          postgres    false    215    3211    217            �           2606    64572 '   cartitem FK_fe9eb5aacb017eed0adf266e98c    FK CONSTRAINT     �   ALTER TABLE ONLY public.cartitem
    ADD CONSTRAINT "FK_fe9eb5aacb017eed0adf266e98c" FOREIGN KEY ("cartId") REFERENCES public.cart(id) ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.cartitem DROP CONSTRAINT "FK_fe9eb5aacb017eed0adf266e98c";
       public          postgres    false    219    3215    217            3   1   x�3�4202�54�52T02�26�25г42�41�4�2�'m����� ��      1   )   x�3�4���4�2�41���a �H��i�=... ���      7   �   x���1nD1���{�È�M�(J��r�so�o��1�R������~}5*�	}Z�KtN���?� k���=��f���HPW�N�S�Jw�����[$B� v�q�^c��i(-x�Y}���}�yJ�d�	W_�ׁ��6Ź��8��gv�*s{�z�֨t��n�X&�*ɲ>����*Q�|�_����BvE      5   J   x�M���0C��0�����稑Ҋ���[i�f�,���b���������35�*���pvr�I�<���D      /   �  x�͕�r�6���S`�E�$��E3����S�V%��3��(8$A�d�m� Yt���/�Cȗ�ɺ�I\<��s�C3޴�A���Mg���-[-o�2��iC�5Gם(�A��Q��ld�\ ^��Y�L>�]!�N������aW�3Q�J��Uh���;�h�	�s��-����8*D-4�g��0v16���%��F4ri�D�?ضmcF���Q��3ݬ�Z��j�LU^%r��Ӕ���d��L<I�(�=����Y��Nie;E�����ѪpL��1�őґ�C�b�0B��[���Ʒ�ýn����� ��M��GlH�W��Z����Z��m�U��t^��,9���L{0��PӕϹ9B�×��X�9���ߡ5o�~�j��>�g����߀%�07N��3X����?�Y^[���³r�^NJ��Mٙ�Vr�$L�(�XLZ$���Fދ���OC���R�h&j�SF�`����ᠧeP �O,�0���#$s��Cζ���u���hE-�\�m�����#�a1N^�3w��F�	Z�����^�ס�"�Y�� ə'"t��o�Q<c.&D$Q�c�,�Y���q���O	f�E�`p�j�B-��ӳ�o���F�շRT��W �N[��T��\��z.Y@q(dw>V�[���� `����K��|'z�.�/�ػ1Uz�l�&�o�y�>��ig��\��T
cҬ�;��;�B�ɺH��ДgA�Yԧɐ>Nfh|�8�p5/N�h2�:Y]^������E���`�i�u�� IىV�vk�d��DyHvK��y�~�{R�����sM��j\0K�}G쇸I3>jwE�;��~޾q ȷ��R��xp��@���j�@���3W{�7]�L�1�'�-$�L��Z��8��3�X�R��A�������m�E�)�d��BK�~���S��5?B�9'l�ۇ��u�2�.�84��%�t��C����0�6"�B/r		}��7�Z�/Y�����^�m$��l�6^n8��ʔXw��G��+$�Gh�;���n�؇?�W��
��s�,%��_0��*��Xv�;3��ɪ�\�R�<�{Φ{�Vc�6ߡ%�D�$~�୻��ۭ's��|��(�p�/7�|v�w���g=��팟��9&���W�T�\��?��p�/�G��      9   b   x�3��N�-I-��̆�鹉�9z�����F�&�FF&���F�
FVƖV&�z�F�\F�ΉE�%���`
Y'��41�2��3� ��q��qqq E�1     